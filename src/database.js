    var nft_obj = {};

    function formatted_string(pad, str) {
      return (pad + str).slice(-pad.length);
    }

    var i = 0;

      nft_obj[Object.keys(nft_obj).length + 1] = {

        function() {
          i++;
        },
        "name": `Member ${i}`,
        "description": `Arkius Member`,
        "image": `https://ipfs.io/ipfs/QmPey2czyZyiDMa6MJtoVRFKPHfUHrZawr1ZMoh9AhJU1y?filename=Screenshot_1.png`,
        "external_url": "",
        "attributes": [
          {
            "trait_type": "Identified",
            "value": "false"
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
          {
            "trait_type": "MembershipToken",
            "value": `Member ${i}`
          },
          {
            "trait_type": "PaymentPaid",
            "value": 0,
          },
          {
            "trait_type":"PaymentAmount",
            "value": 0,
          },
          {
            "trait_type": "ValuesPropose",
            "value": 1,
          },
          {
            "trait_type": "ValuesModify",
            "value": 0,
          },
          {
            "trait_type": "ValuesVote",
            "value": 0,
          },
          {
            "trait_type": "ValuesCommentReview",
            "value": 0,
          },
          {
            "trait_type": "CertificationsPropose",
            "value": 1,
          },
          {
            "trait_type": "CertificationsModify",
            "value": 0,
          },
          {
            "trait_type": "CertificationsVote",
            "value": 0,
          },
          {
            "trait_type": "CertificationsCommentReview",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsCreate",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsModify",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsVote",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsReply",
            "value": 0,
          },
          {
            "trait_type": "ProposalsPetitions",
            "value": 0,
          },
          {
            "trait_type": "EntityCertificateToken",
            "value": 0,
          },
          {
            "trait_type": "BudgetVote",
            "value": 0,
          },
          {
            "trait_type": "BudgetModify",
            "value": 0,
          },
          {
            "trait_type": "BudgetCompensation",
            "value": 0,
          },
          {
            "trait_type": "BudgetCommentReview",
            "value": 0,
          },
          {
            "trait_type": "BudgetPropose",
            "value": 0,
          },
      ],
    }
  module.exports = nft_obj;
