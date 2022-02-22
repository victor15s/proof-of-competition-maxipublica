use words;

db.createCollection('words');

db.words.insert({ word: 'deposita a la cuenta', allowed: false, status: 'active', dateCreated: new Date(), lastDateUpdated: new Date(), dateDeleted: null });