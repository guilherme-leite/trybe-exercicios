using FluentAssertions;
using Xunit;

namespace greet.Test;

public class UnitTest1
{
    [Theory(DisplayName = "Deve retornar \"Oi!\"")]
    [InlineData("Oi!")]
    public void TestGreet(string expected)
    {
        var result = Class1.greet();
        result.Should().Be(expected);
    }
}