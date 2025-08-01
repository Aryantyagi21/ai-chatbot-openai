function chatbotLogic(message) {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('nda') && lowerMsg.includes('ssb')) {
    return 'NDA (National Defence Academy) is an entry mode into the Armed Forces. After clearing the written exam conducted by UPSC, candidates go through the SSB interview for final selection.';
  } else if (lowerMsg.includes('ssb')) {
    return 'SSB stands for Service Selection Board. It conducts interviews to assess candidates for becoming officers in the Indian Armed Forces.';
  } else if (lowerMsg.includes('afsb')) {
    return 'AFSB stands for Air Force Selection Board, which is the SSB interview board for Indian Air Force candidates.';
  }

  return 'Sorry, I do not understand the question.';
}

module.exports = chatbotLogic;
