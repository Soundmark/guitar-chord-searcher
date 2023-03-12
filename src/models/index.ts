import { createModel } from "@/utils/createModel";

interface Params {
  settingVisible: boolean;
  chordVisible: boolean;
  metronomeVisible: boolean;
  searchValue: string;
  chordUrl?: string;
}

export const indexModel = createModel<Params>({
  name: "index",
  state: {
    settingVisible: false,
    chordVisible: false,
    metronomeVisible: false,
    searchValue: "",
  },
});
