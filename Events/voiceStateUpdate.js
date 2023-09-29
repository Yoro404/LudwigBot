const XP = require("../xp_system/XP");

const timers = {};

module.exports = async (bot, oldState, newState) => {
  const userJoinedChannel = !oldState.channelId && newState.channelId;
  const userLeftChannel = oldState.channelId && !newState.channelId;
  const userChangedChannel = oldState.channelId !== newState.channelId;

  if (userJoinedChannel) {
    // L'utilisateur a rejoint un salon vocal
    
    timers[newState.member.id] = setInterval(async () => {
      if (!newState.channelId) {
        clearInterval(timers[newState.member.id]); // Arrêter l'intervalle si l'utilisateur quitte le salon vocal
        delete timers[newState.member.id]; // Supprimer l'entrée du dictionnaire des temporisateurs
        return;
      }
      var randomAmountOfXp = Math.floor(Math.random() * 50) + 3;
      await XP.AddXP({ msg: newState, xp: randomAmountOfXp });
    }, 60000);
  } else if (userLeftChannel) {
    clearInterval(timers[oldState.member.id]); // Arrêter l'intervalle si l'utilisateur quitte le salon vocal
    delete timers[oldState.member.id]; // Supprimer l'entrée du dictionnaire des temporisateurs
  } else if (userChangedChannel) {
    // L'utilisateur a changé de salon vocal
    // Vous pouvez ajouter un traitement spécifique ici si nécessaire
  }
};