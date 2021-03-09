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

app.get('/', function(req, res) {
  var metadata = {
    "name": "Arkius Members",
    "description": "Arkius Members are adorable aquatic beings primarily for demonstrating what can be done using the OpenSea platform. Adopt one today to try out all the OpenSea buying, selling, and bidding feature set.",
    "image": "https://openseacreatures.io/image.png",
    "external_link": "https://openseacreatures.io",
}
    //"seller_fee_basis_points": 100, //# Indicates a 1% seller fee.
    //"fee_recipient": "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8" //# Where seller fees will be paid to.

  res.send(metadata);
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const token = db[tokenId]

  res.send(token);
})

app.post('/api/token/:token_id', function(req, res) {

  const tokenId = parseInt(req.params.token_id).toString()
  const token = {
                        "name": `Member ${token_id}`,
                        "description": `Arkius Member`,
                        "image": `https://ipfs.io/ipfs/QmPey2czyZyiDMa6MJtoVRFKPHfUHrZawr1ZMoh9AhJU1y?filename=Screenshot_1.png`,
                        "external_url": "",
                        "attributes": [
                            {
                              "trait_type": "Identified",
                              "value": req.body.Identified
                            },
                            {
                              "trait_type": "Certifier",
                                      "value": req.body.Certifier
                            },
                            {
                              "trait_type": "Entity",
                              "value": req.body.Entity
                            },
                            {
                             "trait_type": "Champion",
                              "value": req.body.Champion
                            },
                            {
                              "trait_type": "MembershipToken",
                              "value": `Member ${token_id}`
                            },
                            {
                              "trait_type": "PaymentPaid",
                              "value": req.body.PaymentPaid
                            },
                            {
                              "trait_type":"PaymentAmount",
                              "value": req.body.PaymentAmount
                            },
                            {
                              "trait_type": "ValuesPropose",
                              "value": req.body.ValuesPropose
                            },
                            {
                              "trait_type": "ValuesModify",
                              "value": req.body.ValuesModify
                            },
                            {
                              "trait_type": "ValuesVote",
                              "value": req.body.ValuesVote
                            },
                            {
                              "trait_type": "ValuesCommentReview",
                              "value": req.body.ValuesCommentReview
                            },
                            {
                              "trait_type": "CertificationsPropose",
                              "value": req.body.CertificationsPropose
                            },
                            {
                              "trait_type": "CertificationsModify",
                              "value": req.body.CertificationsModify
                            },
                            {
                              "trait_type": "CertificationsVote",
                              "value": req.body.CertificationsVote
                            },
                            {
                              "trait_type": "CertificationsCommentReview",
                              "value": req.body.CertificationsCommentReview
                            },
                            {
                              "trait_type": "ForumPostsCreate",
                              "value": req.body.ForumPostsCreate
                            },
                            {
                              "trait_type": "ForumPostsModify",
                              "value": req.body.ForumPostsModify
                            },
                            {
                              "trait_type": "ForumPostsVote",
                              "value": req.body.ForumPostsVote
                            },
                            {
                              "trait_type": "ForumPostsReply",
                              "value": req.body.ForumPostsReply
                            },
                            {
                              "trait_type": "ProposalsPetitions",
                              "value": req.body.ProposalsPetitions
                            },
                            {
                              "trait_type": "EntityCertificateToken",
                              "value": req.body.EntityCertificateToken
                            },
                            {
                              "trait_type": "BudgetVote",
                              "value": req.body.BudgetVote
                            },
                            {
                              "trait_type": "BudgetModify",
                              "value": req.body.BudgetModify
                            },
                            {
                              "trait_type": "BudgetCompensation",
                              "value": req.body.BudgetCompensation
                            },
                            {
                              "trait_type": "BudgetCommentReview",
                              "value": req.body.BudgetCommentReview
                            },
                            {
                              "trait_type": "BudgetPropose",
                              "value": req.body.BudgetPropose
                            },
                          ],
                    }
  db[tokenId] = token;

  res.send(token);
})

app.post('/api/token/update/:token_id', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString()
    const token = db[tokenId]
    var trttyp = req.body.trttyp;
    var val = req.body.val;
    for (var i=0; i<token.attributes.length(); i++) {
      if (token.attributes.trait_type == trttyp) {
        token.attributes[i].value = val;
      }
    }
    db[tokenId] = token;

    res.send(db[tokenId]);
  })

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
