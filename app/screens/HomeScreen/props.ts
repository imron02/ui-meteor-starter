export interface Props {
  name: string;
  enthusiasmLevel?: number;
  navigation: {
    openDrawer: () => void
  };
}