let LandRegistry = artifacts.require("LandRegistry");

module.exports = function (deployer) {
    deployer.deploy(LandRegistry);
};
