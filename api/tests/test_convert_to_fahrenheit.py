import unittest
from index import Airport

CELSIUS_TO_FARENHEIT_RATIO = 1.8
FARENHEIT_OFFSET = 32

class test_convert_to_fahrenheit(unittest.TestCase):
    
    def test_convert_to_fahrenheit_positive(self):
        # Test with a positive Celsius value

        # arrange
        celcius_value = 25
        expected_result = celcius_value * CELSIUS_TO_FARENHEIT_RATIO + FARENHEIT_OFFSET

        # act
        airport_instance = Airport()
        actual_result = airport_instance.convert_to_fahrenheit(celcius_value)

        # assert
        self.assertEqual(actual_result, expected_result)

if __name__ == '__main__':
    unittest.main()
