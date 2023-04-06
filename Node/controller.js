"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getLiveBuild = exports.getBuildInfo = exports.addToBuildQueue = void 0;
var Builder_1 = __importDefault(require("../Builder"));
var fse = __importStar(require("fs-extra"));
var child_process_1 = __importDefault(require("child_process"));
var Packages_1 = __importDefault(require("../models/Packages"));
var path_1 = __importDefault(require("path"));
function addToBuildQueue(projectId, filePath, platform) {
    if (!projectId || !filePath || !platform)
        return;
    //* Check if the projectId is in queue
    var isInQueue = Builder_1["default"].builds.find(function (b) { return b.projectId == projectId; });
    if (isInQueue)
        return;
    //   get packages
    var packages = (0, Packages_1["default"])(filePath);
    if (packages.length > 0) {
        var spawnArgs = __spreadArray(['pub', 'add'], packages, true);
        child_process_1["default"].spawn('touch', ['pubspec.yaml']);
        // add dependency to pubspec.yaml
        child_process_1["default"].spawn(Builder_1["default"].flutterPath, spawnArgs);
    }
    //* Clear project folder
    if (fse.existsSync("projects/".concat(projectId))) {
        fse.rmSync("projects/".concat(projectId), { force: true, recursive: true });
    }
    fse.mkdirSync("projects/".concat(projectId), { recursive: true });
    //* Move file to project
    // const old_projectPath = `projects/${projectId}/current${filePath.replace('tmp/', '')}.dart`;
    var projectPath = "projects/".concat(projectId, "/current/lib/main.dart");
    fse.moveSync(filePath, projectPath, { overwrite: true });
    console.log(projectPath);
    //* Find primary directory
    var projectsCurrent = "projects/".concat(projectId, "/current");
    var primaryDirectoryPath = function () {
        if (fse.existsSync("".concat(projectsCurrent))) {
            return path_1["default"].join(__dirname, '../../', projectsCurrent);
        }
        return;
    };
    var build = Builder_1["default"].build(projectId, primaryDirectoryPath(), platform);
    return build.buildId;
}
exports.addToBuildQueue = addToBuildQueue;
function getBuildInfo(buildId) {
    var build = Builder_1["default"].builds.find(function (b) { return b.buildId == buildId; });
    if (!build) {
        var buildFinished = Builder_1["default"].completedBuilds.find(function (b) { return b.buildId == buildId; });
        if (!buildFinished)
            return;
        return buildFinished.serialize();
    }
    return build.serialize();
}
exports.getBuildInfo = getBuildInfo;
function getLiveBuild(buildId) {
    var buildFinished = Builder_1["default"].completedBuilds.find(function (b) { return b.buildId == buildId; });
    if (!buildFinished)
        return;
    return buildFinished.projectPath;
}
exports.getLiveBuild = getLiveBuild;
// {
//     "timestamp": 1680794886240,
//     "data": "Target file \"lib/main.dart\" not found.\n"
// },
// {
//     "timestamp": 1680794886508,
//     "data": "Error: ENOENT: no such file or directory, lstat '/Users/kipmurkoremmanuel/Desktop/WidgetBuilderTheta/projects/124/current/build/web'"
