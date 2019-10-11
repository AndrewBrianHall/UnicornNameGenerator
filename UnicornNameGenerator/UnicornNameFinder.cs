using System;
using System.Collections.Generic;

namespace UnicornNameGenerator
{
    public static class UnicornNameFinder
    {
        public static Dictionary<string, string> NameMap = new Dictionary<string, string>
        {
            {"A","Mystic"},
            {"B","Lemonade"},
            {"C","Moonbeam"},
            {"D","Rainbow"},
            {"E","Princess"},
            {"F","Whirlwind"},
            {"G","Twilight"},
            {"H","Glimmer"},
            {"I","Joyful"},
            {"J","Sunbeam"},
            {"K","Emerald"},
            {"L","Ladybug"},
            {"M","Violet"},
            {"N","Confetti"},
            {"O","Breezy"},
            {"P","Sparkle"},
            {"Q","Butterfly"},
            {"R","Daffodil"},
            {"S","Fancy"},
            {"T","Duchess"},
            {"U","Sassy"},
            {"V","Sprinkle"},
            {"W","Queen"},
            {"X","Amethyst"},
            {"Y","Gracious"},
            {"Z","Bumblebee"}
        };

        public static Dictionary<int, string> BirthdayMap = new Dictionary<int, string>
        {
            {1,"Crystal-Dazzler"},
            {2,"Twinkle-Sweet"},
            {3,"Giltter-Blossom"},
            {4,"Nimble-Flower"},
            {5,"Snowflake-Dream"},
            {6,"Cloud-Jumper"},
            {7,"Raindrop-Mist"},
            {8,"Sprit-Dancer"},
            {9,"Moon-Clover"},
            {10,"Feather-Wind"},
            {11,"Starshine-Blazer"},
            {12,"Frost-Fire"}
        };

        public static string GetUnicornName(string name, string birthday)
        {
            string firstName = GetFirstName(name);
            string lastName = GetLastName(birthday);


            return $"{firstName} {lastName}";
        }

        public static string GetFirstName(string name)
        {
            string firstLetter = name.Substring(0, 1).ToUpper();
            return NameMap[firstLetter];
        }

        public static string GetLastName(string birthday)
        {
            int month = DateTime.Parse(birthday).Month;
            return BirthdayMap[month];
        }
    }
}
