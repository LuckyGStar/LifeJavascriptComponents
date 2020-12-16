const generate = (length) => {
  const hex = `0x1${'0'.repeat(length)}`;
  return Math.floor((1 + Math.random()) * hex)
      .toString(16)
      .substring(1);
};

exports.generate = generate;
