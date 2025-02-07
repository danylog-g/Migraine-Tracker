// Math Library
_math = {};
    // Get Random Number Between min and max
    _math.GetRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Round a number to num decimal places
    _math.Round = function (number, num) {
        return parseFloat(number.toFixed(num));
    }
    // Round a random number to num decimal places
    _math.RoundedRandom = function (min, max, num) {
        return parseFloat(Math.floor(Math.random() * (max - min + 1)) + min, num);
    }
    // KG/LBS Conversions
    _math.KilogramsToPounds = function(kilograms) {
        return Math.round(kilograms * 2.20462);
    }
    _math.PoundsToKilograms = function(pounds) {
        return Math.round(pounds / 2.20462);
    }
    // CM/IMPERIAL Conversions
    _math.CentimetersToFeet = function(centimeters) {
        let inches = Math.round(centimeters / 2.54);
        const feet = Math.floor(inches / 12);
        inches = inches % 12;

        return [feet, inches];
    }
    // Roll Dice
    _math.RollDice = function(amount, faces) {
        var total_sum;
        for (let i = 0; i < amount; i++) {
            total_sum += Math.floor(Math.random() * faces) + 1;
        }
        return total_sum;
    }
// Array Library
_array = {};
    // Get random element from an array
    _array.getRElementFromArray = function(array_) { return array_[Math.floor(Math.random() * array_.length)]; }
// Object Library
_object = {};
    // Get random element from an object
    _object.getRElementFromObject = function(object_) {
        const keys = Object.keys(object_);
        return keys[Math.floor(Math.random() * keys.length)];
    }
// Date Library
_date = {};
    // Get detailed day
    _date.getDay = function(date) {
        // Get info about the day
        const day = date.getDate(); // get day (1-31)
        const dow = date.getDay(); // get day of week (0-6, 0 = Sunday)
        const days_full = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
        const days_short = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ];
        const day_f_name = days_full[dow]; // get full day name
        const day_s_name = days_short[dow]; // get short day name
        // Return day info
        return {
            day_of_month: day,
            day_of_week: dow + 1,
            day_list_full: days_full,
            day_list_short: days_short,
            day_full_name: day_f_name,
            day_short_name: day_s_name
        }
    }
    // Get detailed month
    _date.getMonth = function(date) {
        // Get info about the month
        const month = date.getMonth(); // get month (0-11, 0 = January)
        const month_num = String(date.getMonth() + 1).padStart(2, "0"); // get month, add 1, pad to 2 digits
        const months_full = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        const months_short = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        const month_f_name = months_full[month]; // get full month name
        const month_s_name = months_short[month]; // get short month name
        // Return month info
        return {
            month_number: month_num,
            month_list_full: months_full,
            month_list_short: months_short,
            month_full_name: month_f_name,
            month_short_name: month_s_name
        }
    }
    // Get formatted day month year
    _date.getFormattedDMY = function(format, date) {
        // Get date attributes
        const yyyy = date.getFullYear(); // get full year num
        const mm = String(date.getMonth() + 1).padStart(2, "0"); // get month (0-11, 0 = January), add 1, pad to 2 digits
        const m = date.getMonth() + 1; // get month
        const dd = String(date.getDate()).padStart(2, '0'); // get day, pad to 2 digits
        const d = date.getDate(); // get day (1-31)
        // Determine type of formatting
        if (format === "YYYY - MM - DD") { return `${yyyy} - ${mm} - ${dd}`; }
        else if (format === "YYYY / MM / DD") { return `${yyyy} / ${mm} / ${dd}`; }
        else if (format === "YYYY-MM-DD") { return `${yyyy}-${mm}-${dd}`; }
        else if (format === "YYYY/MM/DD") { return `${yyyy}/${mm}/${dd}`; }
        else if (format === "YYYY - M - D") { return `${yyyy} - ${m} - ${d}`; }
        else if (format === "YYYY / M / D") { return `${yyyy} / ${m} / ${d}`; }
        else if (format === "YYYY-M-D") { return `${yyyy}-${m}-${d}`; }
        else if (format === "YYYY/M/D") { return `${yyyy}/${m}/${d}`; }
        else { return `${yyyy} - ${mm} - ${dd}`; }
    }
    // Convert Decimal To Hours and Minutes
    _date.getHrAndMinFromDecimal = function(decimal_hours) {
        const hours = Math.floor(decimal_hours);
        const minutes = Math.round((decimal_hours - hours) * 60);
        return `${hours} hours and ${minutes} minutes`;
    }