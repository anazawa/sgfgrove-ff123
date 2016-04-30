/* global require */
(function () {
    "use strict";

    var test = require("tape");
    var SGF = require("sgfgrove");

    require("../lib/sgfgrove/ff123.js");

    test("SGFGrove.parse: FF[3]", function (t) {
        t.deepEqual(
            SGF.parse("(;FF[3]CoPyright[foo])"),
            [[[{ FF: 3, CP: "foo" }], []]],
            "lower-case letters should be ignored"
        );

        t.throws(
            function () {
                SGF.parse("(;FF[3]CP[foo]CoPyright[bar])");
            },
            SyntaxError,
            "duplicate property"
        );

        t.end();
    });

}());

