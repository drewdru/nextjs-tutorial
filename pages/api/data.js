function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default (req, res) => {
  res.status(200).json({ id:getRandomInt(999), name: 'Random Value' })
}
