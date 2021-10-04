export type IThemesNames = "kabutar" | "jhirki" | "thesi" | "nehtad";

export type IThemes = Record<IThemesNames, IThemePallete>;

export interface IThemePallete {
  name: IThemesNames;
  primary: ITextTheme;
  secondary: ITextTheme;
}

interface ITextTheme {
  main: string;
  text: string;
}
