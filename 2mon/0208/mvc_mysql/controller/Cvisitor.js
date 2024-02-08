const Visitor = require('../model/Visitor');

//전체 방명록 조회
const allVisitor = async (req, res) => {
    const data = await Visitor.allVisitor();
    console.log(data);
    res.json({ result: data });
};

//하나 방명록 조회
const getVisitor = async (req, res) => {
    console.log(req.params.id);
    const data = await Visitor.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};

//방명록 하나 작성
const postVisitor = async (req, res) => {
    console.log(req.body);
    const data = await Visitor.postVisitor(req.body);
    console.log(data);
    res.json({ result: true, id: data.insertId, name: req.body.name, comment: req.body.comment });
};

//방명록 하나 수정
const patchVisitor = async (req, res) => {
    await Visitor.patchVisitor(req.body);
    res.json({ result: true });
};

//방명록 하나 삭제
const deleteVisitor = async (req, res) => {
    await Visitor.deleteVisitor(req.body.id);
    res.json({ result: true });
};

module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
