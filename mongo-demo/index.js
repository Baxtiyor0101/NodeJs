const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    // useUnifiesTopology: true,
  })
  .then((result) => {
    console.log("Mongodbga ulanish hosil qilindi");
  })
  .catch((err) => {
    console.error("mongodb ga ulanish vaqtida xatolik roy berdi...", err);
  });

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (val, callback) {
        setTimeout(() => {
          const result = val && val.length > 0;
          // callback(result);
        }, 10000);
      },
      message: "Kiton=bning kamida bitta tegi bolishi kerak",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10,
    max: 300,
    get: (val) => Math.round(val),
    set: (val) => Math.round(val),
  },
  category: {
    type: String,
    required: true,
    enum: ["classic", "biografiya", "science"],
    // match:/expression/
    lowercase: true,
    trim: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

async function createBook() {
  const book = new Book({
    name: "NodeJs toliq  asoslari",
    author: "Baxtiyor Oqonboyev",
    tags: null, //["js", "dasturlash", "Nodejs"],
    isPublished: true,
    price: 100,
    category: "     Classic     ",
  });

  try {
    const savedBook = await book.save();
    console.log(savedBook);
  } catch (ex) {
    console.log(ex);
  }
}

async function getBooks() {
  const pageNumber = 3;
  const pageSize = 10;
  //api/books?pageNumber=3&pageSize=10

  const books = await Book.find({ author: "Baxtiyor Oqonboyev" })
    //  .find({ author: /^B/ }) //,uallifi b harfi bilan boshlanganhujjatlarni olib beradi
    // .find({ author: /or$/i }) //muallifning ismi or harflari bilan tugallanagan hujjatlarni olib berdadi
    // .or([{ author: "Baxtiyor Oqonboyev" }, { isPublished: true }])
    // .find({ author: /.*axt*./i }) //muallifning ismida axt sozi uchragan hujjatlar olinadi
    // .count();
    // .skip((pageNumber - 1) * pageSize)
    // .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, author: 1, tags: 1 });
  console.log(books);
}

async function updateBook1(id) {
  const book = await Book.findById(id);
  if (!book) return;
  book.isPublished = true;
  book.author = "Baxtiyor";

  // book.set({
  //   isPublished: true,
  //   author: "Baxtiyor",
  // });

  const updatedBook = await book.save();
  console.log(updatedBook);
}

async function updateBook2(id) {
  const result = await Book.updateMany(
    { _id: id },
    {
      $set: {
        author: "Umar",
        isPublished: false,
      },
    }
  );
  // if (!book) return;
  // book.isPublished = true;
  // book.author = "Baxtiyor";

  // book.set({
  //   isPublished: true,
  //   author: "Baxtiyor",
  // });

  // const updatedBook = await book.save();
  console.log(result);
}

async function deleteBook(id) {
  const book = await Book.findByIdAndRemove({ _id: id });
  console.log(book);
}

// deleteBook("62c59afddaff5d5e41c82fa4");
createBook();
