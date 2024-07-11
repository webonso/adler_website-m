import React from 'react';

function Post() {
  const [checkinDate, setCheckinDate] = useState(new Date());

  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  useEffect(() => {
    const onSubmit = async () => {
      const data = await fetch(`http://localhost/api/flight/${slug}`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    };
  });

  const handleFlight = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(format(new Date(), 'yyyy MM dd kk:mm:ss'));

  return <div>Post</div>;
}

export default Post;
