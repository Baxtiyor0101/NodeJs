const express = require("express");
const Joi = require("joi");
const router = express.Router();

const books = [
  { id: 1, name: "baxt" },
  { id: 2, name: "taxt" },
  { id: 3, name: "axt" },
];

router.get("/", (req, res) => {
  res.send(books);
});

router.post("/", (req, res) => {
  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(201).send(book);
});

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("berilgan api boyicha natija topilmadi");
  }
  res.send(book);
});

router.put("/:id", (req, res) => {
  //kitobni baadan izlab topish kk
  //aagarda kitob bolmasa 404qaytarish
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("berilgan api boyicha natija topilmadi");
  }

  //kitob topilsa sorovni validatsiya qilish
  //agar sorov validatsityadan otmadsa 400 qaytarish

  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //kitobni yangilaymiz
  book.name = req.body.name;
  // yangilangan kitobni qaytarish
  res.send(book);
});

router.delete("/:id", (req, res) => {
  // kitobni idsi boyicha izaymiz
  // topilmasa 404
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("berilgan api boyicha natija topilmadi");
  }

  const bookIndex = books.indexOf(book);
  books.splice(bookIndex, 1);

  // ..atopisa ochiramiz
  // topilgan kitbni qaytaramiz
  res.send(book);
});

function validateBook(book) {
  const bookSchema = {
    name: Joi.string().required().min(3),
  };
  return Joi.object(bookSchema).validate(book);
}

module.exports = router;
