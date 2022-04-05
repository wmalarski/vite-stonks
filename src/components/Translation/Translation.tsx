import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  label: string;
  ns?: string;
};

export const Translation = ({ label, ns }: Props): ReactElement => {
  const { t } = useTranslation(ns ?? "common");
  return t(label);
};
