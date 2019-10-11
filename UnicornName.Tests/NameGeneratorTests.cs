using System;
using UnicornNameGenerator;
using Xunit;

namespace UnicornName.Tests
{
    public class NameGeneratorTests
    {
        [Theory]
        [InlineData("Mystic", "Andrew")]
        [InlineData("Lemonade", "Brad")]
        [InlineData("Gracious", "Yon")]
        public void FirstName(string Expected, string name)
        {
            string result = UnicornNameFinder.GetFirstName(name);

            Assert.Equal(Expected, result);
        }

        [Theory]
        [InlineData("Crystal-Dazzler", "1-01-2001")]
        [InlineData("Cloud-Jumper", "6-01-2001")]
        [InlineData("Starshine-Blazer", "11-01-2001")]
        public void LastName(string expected, string birthday)
        {
            string result = UnicornNameFinder.GetLastName(birthday);

            Assert.Equal(expected, result);
        }
    }
}
