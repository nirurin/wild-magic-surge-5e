import {
  OPT_ROLLTABLE_ENABLE,
  OPT_ROLLTABLE_NAME,
  MODULE_ID,
} from "./Settings.js";
import Chat from "./Chat.js";

export default class RollTableMagicSurge {
  constructor() {}

  Check() {
    const rollTableName = game.settings.get(
      `${MODULE_ID}`,
      `${OPT_ROLLTABLE_NAME}`
    );
    if (
      !game.settings.get(`${MODULE_ID}`, `${OPT_ROLLTABLE_ENABLE}`) ||
      rollTableName === undefined
    ) {
      return;
    }

    const surgeRollTable = game.tables.entities.find(
      (t) => t.name === rollTableName
    );

    surgeRollTable.roll().then((result) => {
      new Chat().SendRollTable(result, surgeRollTable);
    });
  }
}
