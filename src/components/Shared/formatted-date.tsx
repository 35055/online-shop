import React from "react";

interface FormattedDateProps {
  dateString: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ dateString }) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("ru-RU", options);

  return <div>{formattedDate}</div>;
};

export default FormattedDate;
