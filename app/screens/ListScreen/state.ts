type dataObject = {
  title: string;
  subTitle: string;
  image?: string;
}

export interface State {
  data: dataObject[];
}