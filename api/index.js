module.exports = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: '后端服务运行正常',
      timestamp: new Date().toISOString()
    });
  };