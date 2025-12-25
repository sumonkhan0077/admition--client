
import { useEffect, useState } from 'react';
import './App.css'
import University from './components/University'

import Navbar from './components/Navbar';
import HomeSection from './components/Home';
import UniversityList from './components/UniversityList';
import ComparisonModal from './components/ComparisonModal';

function App() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCompareIds, setSelectedCompareIds] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [universitiesToCompare, setUniversitiesToCompare] = useState([]);

  
  
useEffect(() => {
    fetch("http://localhost:5000/universities")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch universities");
        return res.json();
      })
      .then(data => {
        setUniversities(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCompareSelected = async (ids) => {
    setSelectedCompareIds(ids);

    if (ids.length >= 2) {
      // সিলেক্টেড আইডি দিয়ে ডাটা ফেচ করো (বা UniversityList থেকে পাস করো)
      const response = await fetch("http://localhost:5000/universities");
      const allUnis = await response.json();
      const selectedUnis = allUnis.filter(uni => ids.includes(uni.id));
      setUniversitiesToCompare(selectedUnis);
    }
  };

  return (
    <>
    
    <Navbar></Navbar>
    <HomeSection></HomeSection>


    {/* <University universities={universities} loading={loading} error={error} ></University> */}

    <UniversityList onCompareSelected={handleCompareSelected} />
    {/* Modal */}
      {showComparison && (
        <ComparisonModal
          universities={universitiesToCompare}
          onClose={() => {
            setShowComparison(false);
            setSelectedCompareIds([]);
          }}
        />
      )}

      {/* UniversityList-এর নিচে Compare বাটন থেকে ট্রিগার করার জন্য */}
      {selectedCompareIds.length >= 2 && selectedCompareIds.length <= 3 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <button
            onClick={() => setShowComparison(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transition transform hover:scale-110"
          >
            Compare {selectedCompareIds.length} Universities
          </button>
        </div>
      )}
    </>
  )
}

export default App
