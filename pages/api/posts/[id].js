const data = [
  { id: 1, title: 'John Doe', text: 'Long Text Here' },
  { id: 2, title: 'Second Title', text: 'Long Text Here And More Biggest' },
]
export default (req, res) => {
  const {
    query: { id },
  } = req
  res.status(200).json(data.find(x => x.id == id))
}