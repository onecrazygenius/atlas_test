exports = function(changeEvent) {
    const { fullDocument } = changeEvent;
    
    console.log(`New document inserted with ID: ${fullDocument._id}`);
    // You can add more logic here, like sending notifications, processing the data, etc.
};