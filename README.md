# SOLID PRINCIPLES WITH TYPESCRIPT

Content from a live stream from Erick Wendel together with Rodrigo Branas.
Studies purpose only. It's not just for OO.

## TDD

- build software from tests
- every software has 3 parts: given, when, then
- broken, working, refactor
- the test itself will indicate next steps during development

## Archtecture thinking

- starting by domain layer, entities - business logic

## SOLID

1. SRP - Single reponsability principle: separate things that CHANGES FOR DIFFERENT REASONS.It is about moving responsabilities to right places!

2. OCP - Open closed principle: we should be closed for modifications and open for extension. Create an abstract class - closing for modifications and opening for extension

3. LSP - Liskov Substitution Principle: if S (Beer, Whisky, Water) are subclasses of T (Item), in a program it should be possible to substitute instances of T (Item) by instances of S (Beer, Whisky, Water), WITHOUT BROKEN THE APP - it is an expectation! it's not an absolute law.

   - pre conditions must not be strenghten: not accepting entries that the superclass consider valid (look at temp example).
   - post conditions must not be weaken: making outputs different from the expectation of who is calling the method. Accepting wider outputs.
   - invariables must keep consistents: if a subclass accepts that the conceptual state of the class hierarchy be invalid.

4. ISP - Interface Segregation Principle: be careful with broad wide interfaces, don't make subclasses implement methods that they don't need.

5. DIP - Dependency inversion principle:
   - high-level module (closer to business logic, more generalistic) should not depend on low-level modules.
   - both should depend on abastractions (high or low level)
