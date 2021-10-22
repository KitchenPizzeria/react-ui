const express = require("express");
const router = require("./routes");
//const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use("/", router);

app.listen(4000, () =>
  console.log(`Server on port http://localhost:${app.get("port")}/`)
);

// const CONNECTIONURL =
//   "mongodb+srv://root:admin@cluster0.mxzcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose
//   .connect(CONNECTIONURL, { useNewUrlParser: true })
//   .then(() =>
//     app
//       .listen(4000, () =>
//         console.log(`Server on port http://localhost:${app.get("port")}/`)
//       )
//       .catch((error) => console.log(error.message))
//   );

//mongoose.set("findAndModify", false);
