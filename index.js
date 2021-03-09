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
                                      "value": "false"
                             },
                             {

                             "trait_type": "Entity",
                             "value": "false"
                             },

                                             {
                                                               "trait_type": "Champion",
                                                               "value": "true"
                                                             },



                        ],
                        "extra_attributes" : {
                                    "MembershipToken": `Member ${i}`,
                                    "Payment":
                                      "Paid": 0, {
                                      "Amount": 0
                                    },
                                    "Identified": 0,
                                    "Certifier": 0,
                                    "Entity": 0,
                                    "Values": {
                                      "Propose": 1,
                                      "Modify": 0,
                                      "Vote": 0,
                                      "Comment_Review": 0
                                    },
                                    "Certifications": {
                                      "Propose": 1,
                                      "Modify": 0,
                                      "Vote": 0,
                                      "Comment_Review": 0
                                    },
                                    "ForumPosts": {
                                      "Create": 0,
                                      "Modify": 0,
                                      "Reply": 0,
                                      "Vote": 0
                                    },
                                    "Proposals_Petitions": 0,
                                    "EntityCertificateToken": 0,
                                    "Champion": 0,
                                    "Budget": {
                                      "Vote": 0,
                                      "Modify": 0,
                                      "Compensation": 0,
                                      "Comment_review": 0,
                                      "Propose": 0
                                    }
                                  },

                    }
  db[tokenId] = token;

  res.send(token);
})

app.post('/api/token/update/:token_id', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString()
    const token = db[tokenId]
    var trttyp = req.body.trtrtyp;
    var val = req.body.vale;
    toke.attribute[0].val = val;
    db[tokenId] = token;

    res.send(db[tokemId]);
  })

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})