const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.post('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()

  var metadata = {
    "name": "Arkius Members",
    "description": "Arkius Members are adorable aquatic beings primarily for demonstrating what can be done using the OpenSea platform. Adopt one today to try out all the OpenSea buying, selling, and bidding feature set.",
    "image": "https://openseacreatures.io/image.png",
    "external_link": "https://openseacreatures.io",
    "seller_fee_basis_points": 100, //# Indicates a 1% seller fee.
    "fee_recipient": "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8" //# Where seller fees will be paid to.
  }

  const Identified = req.body.Identified;
  const Certifier = req.body.Certifier;
  const Entity = req.body.Entity;
  const Champion = req.body.Champion;
  const MembershipToken = req.body.MembershipToken;
  const PaymentPaid = req.body.PaymentPaid;
  const PaymentAmount = req.body.PaymentAmount;
  const ValuesPropose = req.body.ValuesPropose;
  const ValuesModify = req.body.ValuesModify;
  const ValuesVote = req.body.ValuesVote;
  const ValuesCommentReview = req.body.ValuesCommentReview;
  const CertificationsPropose = req.body.CertificationsPropose;
  const CertificationsModify = req.body.CertificationsModify;
  const CertificationsVote = req.body.CertificationsVote;
  const CertificationsCommentReview = req.body.CertificationsCommentReview;
  const ForumPostsCreate = req.body.ForumPostsCreate;
  const ForumPostsModify = req.body.ForumPostsModify;
  const ForumPostsVote = req.body.ForumPostsVote;
  const ForumPostsReply = req.body.ForumPostsReply;
  const ProposalsPetitions = req.body.ProposalsPetitions;
  const EntityCertificateToken = req.body.EntityCertificateToken;
  const BudgetVote = req.body.BudgetVote;
  const BudgetModify = req.body.BudgetModify;
  const BudgetCompensation = req.body.BudgetCompensation;
  const BudgetCommentReview = req.body.BudgetCommentReview;
  const BudgetPropose = req.body.BudgetPropose;

  console.log(metadata);
  res.send(metadata);
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const token = db[tokenId]

  res.send(token);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
