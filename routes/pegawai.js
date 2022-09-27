var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");
const { production } = require("../config/config");
const { Pegawai } = require("../models");

const v = new Validator();

router.get("/", async (req, res) => {
  const pegawai = await Pegawai.findAll();
  return res.json(pegawai);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const pegawai = await Pegawai.findByPk(id);
  return res.json(
    pegawai || {
      message: "Data pegawai tidak ditemukan!",
    }
  );
});

router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    nip: "string",
    tmt_cpns: "string|optional",
    tmt_pensiun: "string|optional",
    masa_kerja: "string|optional",
    jabatan: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const pegawai = await Pegawai.create(req.body);

  res.json(pegawai);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  let pegawai = await Pegawai.findByPk(id);

  if (!pegawai) {
    return res.json({
      message: "Data pegawai tidak ditemukan!",
    });
  }

  const schema = {
    name: "string|optional",
    nip: "string|optional",
    tmt_cpns: "string|optional",
    tmt_pensiun: "string|optional",
    masa_kerja: "string|optional",
    jabatan: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  pegawai = await pegawai.update(req.body);
  return res.json(pegawai);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let pegawai = await Pegawai.findByPk(id);

  if (!pegawai) {
    return res.json({
      message: "Data pegawai tidak ditemukan!",
    });
  }

  await pegawai.destroy();

  res.json({
    message: "Data pegawai berhasil dihapus!",
  });
});

module.exports = router;
