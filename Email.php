<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if ($data) {
        // Sanitize and assign variables
        $email = htmlspecialchars($data['email']);
        $subject = htmlspecialchars($data['subject']);
        $message = htmlspecialchars($data['message']);

        // Email configuration
        $to = "adhaahmadwork@gmail.com";
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        // Email body
        $email_body = "<h2>Contact Form Submission</h2>";
        $email_body .= "<p><strong>Email:</strong> {$email}</p>";
        $email_body .= "<p><strong>Subject:</strong> {$subject}</p>";
        $email_body .= "<p><strong>Message:</strong><br>{$message}</p>";

        // Send email
        if (mail($to, $subject, $email_body, $headers)) {
            echo "Email sent successfully.";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid input.";
    }
} else {
    echo "Invalid request.";
}
?>