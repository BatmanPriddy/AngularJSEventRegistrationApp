'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
});

eventsApp.filter('levels', function() {
    return function(level){
        switch (level) {
            case "Advanced":
                return "fa fa-bluetooth";
            case "Introductory":
                return "fa fa-camera-retro";
            case "Intermediate":
                return "fa fa-spinner fa-spin";
        }
    }

})