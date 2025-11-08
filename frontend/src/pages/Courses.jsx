import { useState, useEffect } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div>
      <h2>Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div>
          {courses.map((course) => (
            <div key={course.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}