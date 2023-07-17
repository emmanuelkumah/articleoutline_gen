import React, { useState, useEffect } from "react";
import AO_MobileLayout from "./AO_MobileLayout";
import AO_WebLayout from "./AO_WebLayout";
import { FormOptionsContext } from "../../../Context/Context";
import toast, { Toaster } from "react-hot-toast";
//import { openai } from "../../../services/openai";
import { fetchOpenAIData } from "../../../services/openai";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { database } from "../../../services/firebase";

const AO_Home = () => {
  const [formFields, setFormFields] = useState({
    topic: "",
    keyword: "",
    language: "",
    numResults: "",
  });
  const [showOptions, setShowOptions] = useState(false);
  const [switchView, setSwitchView] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState("typing");
  const [hasResponse, setHasResponse] = useState(false);
  const [showResponse, setShowResponse] = useState("");
  const [copied, setCopied] = useState(false);
  const [startNew, setStartNew] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  //handle Submit
  const handleformSubmit = async (data) => {
    const openAiData = await fetchOpenAIData(data);

    //Send data to Database
    addToDatabase(openAiData);
  };

  //write data to DB
  function addToDatabase(data) {
    try {
      const outlineCollectionRef = collection(database, "article_outline");
      addDoc(outlineCollectionRef, {
        outline: data,
        createdAt: new Date(),
      })
        .then((response) => {
          console.log(response.id.outline);
        })
        .catch((error) => error.message);
    } catch (error) {
      console.error("Error adding document", error);
    }
  }

  //realtime subscription to DB
  const readData = () => {
    try {
      const outlineCollectionRef = collection(database, "article_outline");

      const fetchedQuery = query(
        outlineCollectionRef,
        orderBy("createdAt", "desc"),
        limit(1)
      );

      onSnapshot(fetchedQuery, (snapshot) => {
        const fetched = snapshot?.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(fetched);
        setFetchedData(fetched);
        setStatus("received");
      });
    } catch (error) {
      console.log("Error in retrieving document", error);
    }
  };

  //copy to clipboard
  const handleCopyToClip = () => {
    setCopied(true);
    copyToClipboardMsg();
  };

  const copyToClipboardMsg = () => {
    toast.success("Content successfully copied to clipboard");
  };
  //handle reset of result

  const handleResetResponse = () => {
    setHasResponse(false);
  };

  return (
    <FormOptionsContext.Provider
      value={{
        showOptions,
        setShowOptions,
        switchView,
        setSwitchView,
        formFields,

        handleResetResponse,
        handleCopyToClip,
        setShowResponse,
        showResponse,
        hasResponse,
        status,
        fetchedData,
        handleformSubmit,
      }}
    >
      <div className="md:hidden">
        <div>
          <Toaster position="top-center" />
        </div>
        <AO_MobileLayout
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
      </div>
      <div className="hidden md:block">
        {/* <div>
          <Toaster position="top-center" />
        </div> */}
        <AO_WebLayout />
      </div>
    </FormOptionsContext.Provider>
  );
};

export default AO_Home;
