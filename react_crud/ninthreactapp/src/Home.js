function Home()
{
    return(
    <div>
        <h1>Welcome to Home</h1>
        <p>Difference Between Let, and Var
	Variables declared with var are function-scoped or globally scoped, whereas variables declared with let are block-scoped.
	Variables declared with var are function-scoped or globally scoped, whereas variables declared with let are block-scoped. This means you can access them before their actual declaration in the code. 
	Variables declared with let are also hoisted but not initialized. Trying to access them before their declaration results in a reference error.
	Variables declared with var can be redeclared within the same scope without raising an error. 
	Variables declared with let cannot be redeclared within the same scope.


Difference and similarities Between Let, and Const
	Variables declared with let can be reassigned to new values, while variables declared with const cannot be reassigned once they are assigned a value.
	Variables declared with let can be declared without an initial value, whereas variables declared with const must be initialized at the time of declaration.
</p>

    </div>
    );
}

export default Home;