# WordPress Backend Setup Guide

Complete guide to setting up the WordPress backend for Afroluxe Clothing website.

## Prerequisites

- WordPress 6.0+
- PHP 8.0+
- MySQL 5.7+
- Admin access to WordPress dashboard

## Step 1: Install Required Plugins

Install and activate these plugins from the WordPress plugin directory:

1. **Advanced Custom Fields (ACF) Pro** _(Recommended)_
   - Or use free version of ACF
   - Used for custom fields on posts and pages

2. **Custom Post Type UI**
   - For creating custom post types easily
   - Alternative: Code custom post types in theme functions.php

3. **WP REST API Controller** _(Optional)_
   - Better control over REST API endpoints
   - Useful for production

## Step 2: Create Custom Post Types

### Using Custom Post Type UI Plugin

Navigate to **CPT UI → Add/Edit Post Types** and create the following:

#### 1. Collections

```
Post Type Slug: collections
Plural Label: Collections
Singular Label: Collection

Settings:
- Public: true
- Has Archive: true
- Show in REST: true
- REST Base: collections
- Supports: title, editor, thumbnail, excerpt
- Taxonomies: categories
```

#### 2. Services

```
Post Type Slug: services
Plural Label: Services
Singular Label: Service

Settings:
- Public: true
- Has Archive: true
- Show in REST: true
- REST Base: services
- Supports: title, editor
```

#### 3. Testimonials

```
Post Type Slug: testimonials
Plural Label: Testimonials
Singular Label: Testimonial

Settings:
- Public: true
- Has Archive: true
- Show in REST: true
- REST Base: testimonials
- Supports: title, editor
```

### Alternative: Code in functions.php

Add this to your theme's `functions.php`:

```php
// Register Collections Post Type
function afroluxe_register_collections() {
    $args = array(
        'public' => true,
        'label'  => 'Collections',
        'show_in_rest' => true,
        'rest_base' => 'collections',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'has_archive' => true,
    );
    register_post_type('collections', $args);
}
add_action('init', 'afroluxe_register_collections');

// Register Services Post Type
function afroluxe_register_services() {
    $args = array(
        'public' => true,
        'label'  => 'Services',
        'show_in_rest' => true,
        'rest_base' => 'services',
        'supports' => array('title', 'editor'),
        'has_archive' => true,
    );
    register_post_type('services', $args);
}
add_action('init', 'afroluxe_register_services');

// Register Testimonials Post Type
function afroluxe_register_testimonials() {
    $args = array(
        'public' => true,
        'label'  => 'Testimonials',
        'show_in_rest' => true,
        'rest_base' => 'testimonials',
        'supports' => array('title', 'editor'),
        'has_archive' => true,
    );
    register_post_type('testimonials', $args);
}
add_action('init', 'afroluxe_register_testimonials');
```

## Step 3: Create ACF Field Groups

Navigate to **Custom Fields → Add New** and create the following field groups:

### Collections Fields

**Location Rule:** Post Type is equal to Collections

Fields:
- **Season** (Text)
- **Category** (Text)
- **Images** (Gallery)
- **Description** (Textarea)

### Services Fields

**Location Rule:** Post Type is equal to Services

Fields:
- **Description** (Textarea)
- **Features** (Repeater)
  - Subfield: Feature Text (Text)
- **Price Range** (Text)
- **Icon** (Text)

### Testimonials Fields

**Location Rule:** Post Type is equal to Testimonials

Fields:
- **Client Name** (Text)
- **Client Title** (Text)
- **Client Image** (Image)
- **Rating** (Number, min: 1, max: 5)
- **Service** (Text)

### Home Page Fields

**Location Rule:** Post Type is equal to Page AND Page Template is equal to Default Template AND Page is equal to Home

Fields:
- **Hero Title** (Text)
- **Hero Subtitle** (Textarea)
- **Hero CTA Text** (Text)
- **Hero CTA Link** (URL)
- **Hero Image** (Image)

### About Page Fields

**Location Rule:** Post Type is equal to Page AND Page is equal to About

Fields:
- **Mission** (Textarea)
- **Vision** (Textarea)
- **Designer Bio** (Wysiwyg Editor)
- **Designer Image** (Image)
- **Values** (Repeater)
  - Subfield: Title (Text)
  - Subfield: Description (Textarea)

## Step 4: Expose ACF Fields to REST API

Add this to your theme's `functions.php`:

```php
// Expose ACF fields in REST API
add_action('rest_api_init', function () {
    // Collections
    register_rest_field('collections', 'acf', array(
        'get_callback' => function ($object) {
            return get_fields($object['id']);
        },
    ));
    
    // Services
    register_rest_field('services', 'acf', array(
        'get_callback' => function ($object) {
            return get_fields($object['id']);
        },
    ));
    
    // Testimonials
    register_rest_field('testimonials', 'acf', array(
        'get_callback' => function ($object) {
            return get_fields($object['id']);
        },
    ));
    
    // Pages
    register_rest_field('page', 'acf', array(
        'get_callback' => function ($object) {
            return get_fields($object['id']);
        },
    ));
});
```

## Step 5: Create Form Submission Endpoints

Add custom REST API endpoints for form submissions:

```php
// Contact Form Endpoint
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form',
        'permission_callback' => '__return_true'
    ));
});

function handle_contact_form($request) {
    $params = $request->get_json_params();
    
    // Validate input
    if (empty($params['name']) || empty($params['email']) || empty($params['message'])) {
        return new WP_Error('missing_fields', 'Required fields are missing', array('status' => 400));
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $params['name'];
    $message = "Name: {$params['name']}\n";
    $message .= "Email: {$params['email']}\n";
    $message .= "Phone: {$params['phone']}\n";
    $message .= "Subject: {$params['subject']}\n\n";
    $message .= "Message:\n{$params['message']}";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    $sent = wp_mail($to, $subject, $message, $headers);
    
    if ($sent) {
        return array('success' => true, 'message' => 'Form submitted successfully');
    } else {
        return new WP_Error('email_failed', 'Failed to send email', array('status' => 500));
    }
}

// Booking Form Endpoint
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/bookings', array(
        'methods' => 'POST',
        'callback' => 'handle_booking_form',
        'permission_callback' => '__return_true'
    ));
});

function handle_booking_form($request) {
    $params = $request->get_json_params();
    
    // Validate required fields
    $required = ['name', 'email', 'phone', 'service', 'preferred_date', 'preferred_time'];
    foreach ($required as $field) {
        if (empty($params[$field])) {
            return new WP_Error('missing_fields', "Field {$field} is required", array('status' => 400));
        }
    }
    
    // Create booking post
    $booking_id = wp_insert_post(array(
        'post_type' => 'bookings',
        'post_title' => $params['name'] . ' - ' . $params['service'],
        'post_status' => 'publish',
        'meta_input' => array(
            'client_name' => $params['name'],
            'client_email' => $params['email'],
            'client_phone' => $params['phone'],
            'service' => $params['service'],
            'preferred_date' => $params['preferred_date'],
            'preferred_time' => $params['preferred_time'],
            'budget' => $params['budget'] ?? '',
            'notes' => $params['notes'] ?? '',
        )
    ));
    
    if ($booking_id) {
        // Send confirmation email
        $to = $params['email'];
        $subject = 'Booking Confirmation - Afroluxe Clothing';
        $message = "Dear {$params['name']},\n\n";
        $message .= "Thank you for booking a consultation with Afroluxe Clothing.\n\n";
        $message .= "Booking Details:\n";
        $message .= "Service: {$params['service']}\n";
        $message .= "Date: {$params['preferred_date']}\n";
        $message .= "Time: {$params['preferred_time']}\n\n";
        $message .= "We will contact you within 24 hours to confirm your appointment.\n\n";
        $message .= "Best regards,\nAfroluxe Clothing Team";
        
        wp_mail($to, $subject, $message);
        
        return array(
            'success' => true,
            'booking_id' => $booking_id,
            'message' => 'Booking created successfully'
        );
    } else {
        return new WP_Error('booking_failed', 'Failed to create booking', array('status' => 500));
    }
}
```

## Step 6: Enable CORS (if needed)

If your Next.js frontend is on a different domain:

```php
// Enable CORS for REST API
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        return $value;
    });
}, 15);
```

## Step 7: Test REST API Endpoints

Test your endpoints using a tool like Postman or browser:

```
GET https://your-site.com/wp-json/wp/v2/collections
GET https://your-site.com/wp-json/wp/v2/services
GET https://your-site.com/wp-json/wp/v2/testimonials
GET https://your-site.com/wp-json/wp/v2/posts
POST https://your-site.com/wp-json/wp/v2/contact-form
POST https://your-site.com/wp-json/wp/v2/bookings
```

## Step 8: Populate Content

Create sample content for:

- 3-6 Collections with images
- 6 Services with details
- 5-10 Testimonials
- 5-10 Blog posts
- About page with ACF fields
- Home page with ACF fields

## Security Recommendations

1. **Use JWT Authentication** for protected endpoints
2. **Rate Limiting** to prevent abuse
3. **Input Validation** on all form submissions
4. **HTTPS** for all API requests
5. **Sanitize** all user inputs before saving

## Troubleshooting

### ACF Fields Not Showing in REST API

- Ensure ACF fields are set to show in REST
- Check the `rest_api_init` code is added correctly
- Clear WordPress cache

### Custom Post Types Not Appearing

- Re-save permalink settings: Settings → Permalinks → Save Changes
- Check post type registration code
- Verify `show_in_rest` is set to `true`

### CORS Errors

- Add CORS headers as shown in Step 6
- Check server configuration
- Use proper authentication headers

## Next Steps

Once WordPress is set up:

1. Update `.env.local` in Next.js project with WordPress URL
2. Replace mock data with actual API calls
3. Test all pages and forms
4. Deploy to production

## Support

For WordPress-specific issues, refer to:
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [ACF Documentation](https://www.advancedcustomfields.com/resources/)
