"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedNode = /** @class */ (function () {
    function LinkedNode(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        _this.current = null;
        return _this;
    }
    LinkedList.prototype.add = function (value) {
        var node = new LinkedNode(value);
        if (!this.head) {
            this.head = node;
            this.current = this.head;
            return;
        }
        if (this.current) {
            this.current.next = node;
            this.current = this.current.next;
        }
    };
    LinkedList.prototype.print = function () {
        console.log("---- LinkedList Elements ----");
        var currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("-----------------------------");
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var length = 0;
            var currentNode = this.head;
            while (currentNode) {
                length++;
                currentNode = currentNode.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('LinkedList is empty');
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftValue = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftValue;
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
