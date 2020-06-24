// import React from "react";
// import RecipeCard from "../components/RecipeCard"

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         title: "",
//     source: "",
//     ingredients: [],
//     directions: [],
//     tags: [],
//     note: "",
//     fullNote: [],
//     ingredientValue: "",
//     directionValue: "",
//     tag: "",
//     commonTags: [
//       "Breakfast",
//       "Lunch",
//       "Dinner",
//       "Dessert",
//       "Side",
//       "Main",
//       "Appetizer",
//       "Vegetable",
//       "Chicken",
//       "Pork",
//       "Beef",
//       "Quick",
//     ]
//       }
// };
// }
//   handleChange = (e) => {
//     this.setState({
//       recipeDashboard: {
//         ...this.state.recipeDashboard,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   putMessage = (e) => {
//     e.preventDefault();
//     this.props.putMessage(this.state.recipeDashboard);
//   }

//   render() {
//     return (
//       <div className='dashboard'>
//         <h2>Dashboard</h2>
//         <form onSubmit={this.put}>
//             <RecipeCard />
//           <input
//             type='text'
//             name='title'
//             placeholder='title'
//             onChange={this.handleChange}
//             value={this.state.recipeDashboard.title}
//           />
//           <input
//             type='text'
//             name='source'
//             placeholder='source'
//             onChange={this.handleChange}
//             value={this.state.recipeDashboard.source}
//           />

//           {this.props.putError ? (
//             <ErrorMessage message={this.props.putError} />
//           ) : null}
//           {this.props.putSuccessMessage ? (
//             <SuccessMessage message={this.props.putSuccessMessage} />
//           ) : null}
//           <button className='allrecipes-btn' type='submit'>
//             dash
//           </button>
//         </form>
//       </div>
//     );
//   }

// export default Dashboard
