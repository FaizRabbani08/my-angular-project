import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-write-review',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css'],
})
export class WriteReviewComponent {
  reviewForm: FormGroup;
  rating: number = 0;

  constructor(private fb: FormBuilder) {
    // Initialize the review form
    this.reviewForm = this.fb.group({
      businessName: ['', [Validators.required]],
      reviewText: ['', [Validators.required, Validators.minLength(10)]],
      rating: [0, [Validators.required, Validators.min(1)]],
    });
  }

  setRating(stars: number) {
    this.rating = stars;
    this.reviewForm.controls['rating'].setValue(stars); // Update form value
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      console.log('Review Submitted:', this.reviewForm.value);
      alert('Your review has been submitted!');
      this.reviewForm.reset(); // Reset the form after submission
      this.rating = 0; // Reset the rating
    } else {
      alert('Please complete all required fields.');
    }
  }
}
