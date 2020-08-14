const dateFormatValue = (value: Date): string => {
  const date = new Date(value);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return Intl.DateTimeFormat('pt-BR', options).format(date);
};

export default dateFormatValue;
