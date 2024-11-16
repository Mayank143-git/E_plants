<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Page</title>
    <link rel="stylesheet" href="order.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Buy Now
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Buy Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form method="post" enctype="multipart/form-data">
        <div class="mb-3">
             <label for="name" class="form-label">Name</label>
             <input type="text" name="name" class="form-control" id="name" placeholder="Name">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="text" name="email" class="form-control" id="email" placeholder="Email Address">
       </div>
        
       <div class="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input type="text" name="phone" class="form-control" id="phone" placeholder="Phone Number">
       </div>

       <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <textarea class="form-control" name="address" id="address" rows="3" placeholder="Address"></textarea>
   </div>
          <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
        
      </div>
    </div>
  </div>

  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <script src="order.js"></script>
</body>
</html>

<?php
// Database connection
$servername = "localhost"; // Your database host
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "form"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name = ($_POST['name']);
    $email =($_POST['email']);
    $phone = ($_POST['phone']);
    $address = ($_POST['address']);

    // Prepare SQL query to insert data into the database
    $sql = "INSERT INTO form (name, email, phone, address) 
            VALUES ('$name', '$email', '$phone', '$address')";

    // Execute the query and check if data was inserted
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
