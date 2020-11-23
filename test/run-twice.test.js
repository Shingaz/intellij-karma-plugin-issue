/*
 * Run the test with IntelliJ Karma plugin ==> Pass
 * Change expected to false
 * Rerun the test with IntelliJ Karma plugin ==> Pass but should fail
 */

it('should fail after changing expect to false and running again through the Karma plugin', () => {
    expect(true).toBe(false);
})
