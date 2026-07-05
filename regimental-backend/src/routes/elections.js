const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const { authenticate, requireAdmin } = require('../middleware/auth');

// List published elections
router.get('/', async (req, res) => {
  try {
    const elections = await prisma.election.findMany({ where: { isPublished: true }, include: { candidates: true } });
    res.json(elections);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single election
router.get('/:id', async (req, res) => {
  try {
    const election = await prisma.election.findUnique({ where: { id: req.params.id }, include: { candidates: true } });
    if (!election) return res.status(404).json({ error: 'Not found' });
    res.json(election);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create election (admin)
router.post('/', authenticate, requireAdmin, async (req, res) => {
  try {
    const { title, description, startsAt, endsAt, isPublished } = req.body;
    const election = await prisma.election.create({ data: { title, description, startsAt: new Date(startsAt), endsAt: new Date(endsAt), isPublished: !!isPublished, createdBy: req.user.id } });
    res.json(election);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Cast a vote
router.post('/:electionId/vote', authenticate, async (req, res) => {
  try {
    const { candidateId } = req.body;
    if (!candidateId) return res.status(400).json({ error: 'Candidate ID required' });
    
    // Check if user already voted in this election
    const existingVote = await prisma.vote.findFirst({
      where: { electionId: req.params.electionId, voterId: req.user.id }
    });
    if (existingVote) return res.status(400).json({ error: 'You have already voted in this election' });
    
    // Record the vote
    const vote = await prisma.vote.create({
      data: {
        electionId: req.params.electionId,
        candidateId,
        voterId: req.user.id
      }
    });
    res.json({ message: 'Vote recorded successfully', vote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get election results
router.get('/:electionId/results', async (req, res) => {
  try {
    const results = await prisma.candidate.findMany({
      where: { electionId: req.params.electionId },
      include: {
        votes: { select: { id: true } }
      }
    });
    const formattedResults = results.map(candidate => ({
      id: candidate.id,
      name: candidate.name,
      bio: candidate.bio,
      imageUrl: candidate.imageUrl,
      voteCount: candidate.votes.length
    }));
    res.json(formattedResults);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
