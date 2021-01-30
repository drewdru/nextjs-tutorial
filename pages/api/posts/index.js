export default (req, res) => {
  res.status(200).json([
    { id: 1, title: 'John Doe', text: 'Long Text Here' },
    { id: 2, title: 'Second Title', text: 'Long Text Here And More Biggest' },
  ])
}