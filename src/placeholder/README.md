Placeholder JQuery plugin
=========================

Why yet an other placeholder plugin?
------------------------------------

Many placeholder plugins are really cool but ask you to add some attributes
to your html tags, such as a 'placeholder' attribute.
This is cool, because many browsers don't interpret html5 'placeholder'
attribute, so this kind of plugin can help old browsers to keep compliant.

Nevertheless, some doctypes like xhtml or even html4 don't support this
attribute. So if you decided to work with an other standard than html5 and
use this kind of plugin, your code won't be a valid one.

Some other plugins are using the 'value' attribute of input tags. By clicking
on it, it will remove the value and when clicking on an other element, the
value will come back if the field is left empty.
That's cool too! This kind of plugins allow you not to change your html code.

But sometimes, placeholders need to be different than the value.
For instance: if you kept a value provided by the user, you can't replace it
by the placeholder, so if the user just decide to erase this value it won't
be replaced by the placeholder.

