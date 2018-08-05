// @flow

export type DataObject = {
  title: string;
  subTitle: string;
  image?: string;
}

export type Props = {
  title: string;
  subTitle: string;
  image?: string;
  data: Array<DataObject>
}
