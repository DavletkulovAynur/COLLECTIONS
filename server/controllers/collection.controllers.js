const COLLECTION_MODEL = require("../models/collection");
const USER_MODEL = require("../models/user");
const path = require("path");
const fs = require("fs");
const Uuid = require("uuid");
// const imagemin = require("imagemin");
// const imageminPngquant = require("imagemin-pngquant");
// const imageminMozjpeg = require("imagemin-mozjpeg");
const timestamp = require("time-stamp");
const tinify = require("tinify");
tinify.key = "8N69rLJvs98bgFPF0fFtrpNRDlBF3rYw";

class CollectionControllers {
  async addCollection(req, res) {
    try {
      const file = req.files.file;
      const { title, description, stylePin, nameCollection } = req.body;
      const user = await USER_MODEL.find({ _id: req.user.id });

      //
      const type = file.name.split(".").pop();
      const mainImg = Uuid.v4() + `.${type}`;
      //

      let originalImgPathWay = path.join(
        __dirname,
        `../static/${req.user.id}/original`
      );
      let compressedWayTest = path.join(
        __dirname,
        `../static/${req.user.id}/compressed`
      );
      if (!fs.existsSync(originalImgPathWay)) {
        fs.mkdirSync(originalImgPathWay);
      } 
      if (!fs.existsSync(compressedWayTest)) {
        fs.mkdirSync(compressedWayTest);
      } 

      let pathWay = path.join(
        __dirname,
        `../static/${req.user.id}/original/${mainImg}`
      );
      
      let compressedWay = path.join(
        __dirname,
        `../static/${req.user.id}/compressed/${mainImg}`
      );
      
      await file.mv(pathWay, function(err) {
        if(err) {
          console.log(err)
        }

        fs.readFile(`${pathWay}`, function (err, sourceData) {
          if (err) throw err;
          tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
            if (err) throw err;
  
            fs.writeFile(`${compressedWay}`, resultData, function (err) {
              if (err) throw err;
              console.log("It's saved!");
            });
          });
        });
      });

      //DATE
      const dateTimestamp = Date.now();

      const avatar = user[0].avatar ? user[0].avatar : "";
      const collection = new COLLECTION_MODEL({
        nameCollection,
        title,
        date: timestamp("DD/MM/YYYY"),
        author: user[0].username,
        authorAvatar: avatar,
        dateTimestamp,
        description,
        mainImg,
        stylePin,
        owner: req.user.id,
      });

      await collection.save();

      res
        .status(201)
        .json({ message: "success", status: true, resData: collection });
    } catch (e) {
      res.status(400).json({ message: "Ошибка png" });
    }
  }

  async deleteCollection(req, res) {
    try {
      // удалить коллекцию

      // await  COLLECTION_MODEL.updateMany({_id: id}, {$push: {comments : commentObj}})
      const { idCollection } = req.body;
      const collection = await COLLECTION_MODEL.find({ _id: idCollection });
      const { mainImg } = collection[0];
      const filePathOriginal = path.join(
        __dirname,
        `../static/${req.user.id}/original/${mainImg}`
      );
      const filePathCompressed = path.join(
        __dirname,
        `../static/${req.user.id}/compressed/${mainImg}`
      );
      fs.unlinkSync(filePathOriginal);
      fs.unlinkSync(filePathCompressed);
      await COLLECTION_MODEL.remove({ _id: idCollection });
      res.status(201).json({ message: "delete collection", status: true });
    } catch (e) {
      console.log("error", e);
    }
  }

  async complainCollection(req, res) {
    try {
      const { idCollection } = req.body;
      const collection = await COLLECTION_MODEL.find({ _id: idCollection });
      console.log("collection", collection);
      res.status(201).json({ message: "complain collection", status: true });
    } catch (e) {
      console.log(e);
    }
  }

  async getAllCollection(req, res) {
    try {
      const collection = await COLLECTION_MODEL.find({}).sort({
        dateTimestamp: -1,
      });
      //TODO sort
      res.status(201).json({ resData: collection });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getCollectionView(req, res) {
    try {
      const { collectionId } = req.body;
      const collection = await COLLECTION_MODEL.find({ _id: collectionId });
      res.status(201).json({ resData: collection });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOwnerUserCollection(req, res) {
    try {
      const { userId } = req.body;
      const collection = await COLLECTION_MODEL.find({ owner: userId }).sort({
        dateTimestamp: -1,
      });
      res.status(201).json({ resData: collection });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getBookmarkCollection(req, res) {
    try {
      const { data } = req.body;
      new Promise((resolve, reject) => {
        const allCollection = COLLECTION_MODEL.find();
        resolve(allCollection);
      })
        .then((allCollection) => {
          const bookmarkSave = allCollection.filter((i) =>
            data.includes(String(i._id))
          );
          res.status(201).json({ resData: bookmarkSave });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async searchCollection(req, res) {
    try {
      const { value } = req.body;

      const data = await COLLECTION_MODEL.find().sort({ dateTimestamp: -1 });

      const searchResult = data.filter((collection) => {
        return !collection.title.toLowerCase().indexOf(value.toLowerCase());
      });

      res.status(201).json({
        message: "Collection update",
        status: true,
        resData: searchResult,
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getSubscribeCollection(req, res) {
    try {
      //переделать
      const { userSubscribe } = req.body;

      const allCollections = await COLLECTION_MODEL.find();

      const subscribeCollections = allCollections.filter((item) => {
        return userSubscribe.includes(String(item.owner));
      });

      res.status(201).json({ resData: subscribeCollections });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new CollectionControllers();
